const BASE_URL = 'http://89.108.65.123:8080/';

const renderComment = (comment_id, text, likes) => {
  const comment = $(`
    <div class="card">
      <div class="card-body">
        <button class="btn btn-danger float-right" data-comment_id=${comment_id} onclick=handleDeleteBtnClick(this)>&times;</button>
        <blockquote class="blockquote">
          <p class="mb-0">${text}</p>
        </blockquote>
        <button type="button" class="btn btn-primary" data-comment_id=${comment_id} onclick=handlePatchBtnClick(this)>
          Like <span class="badge badge-light">${likes}</span>
        </button>
      </div>
    </div>
  `);

  comment.prependTo('#comments');
}

const request = (path, method) => {
  return $.ajax({
    url: `${BASE_URL}${path}`,
    method
  }).done(data => data);
}

const getCommentsList = async () => {
  comments = await request('comments', 'get');
  comments.forEach(comment => {
    renderComment(comment.comment_id, comment.text, comment.likes);
  });
}

const addComment = async e => {
  e.preventDefault();
  const text = $('#comments-form #text').val();
  const addedComment = await request(`comments?text=${text}`, 'post');
  renderComment(addedComment.comment_id, addedComment.text, addedComment.likes);
  $('#comments-form').trigger('reset');
}

async function handlePatchBtnClick(btn) {
  const commentId = btn.dataset.comment_id;
  const patchedComment = await request(`comments?comment_id=${commentId}`, 'patch');
  $(btn).find('.badge').text(patchedComment.likes);
}

async function handleDeleteBtnClick(btn) {
  const commentId = btn.dataset.comment_id;
  const deletedComment = await request(`comments?comment_id=${commentId}`, 'delete');
  $(btn).parent().parent().remove();
}

$(function() {
  getCommentsList();
  $('#comments-form').on('submit', addComment);
});


  