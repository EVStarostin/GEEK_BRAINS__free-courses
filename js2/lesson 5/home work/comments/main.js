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
          Likes <span class="badge badge-light">${likes}</span>
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
  }).done(data => {
    return data;
  });
}

const showError = error => {
  let message = '';
  if (error.responseJSON) {
    message = error.responseJSON.message;
  } else {
    message = 'Ошибка получения данных';
  }
  console.error(message);
}

const getCommentsList = async () => {
  try {
    comments = await request('comments', 'get');
    comments.forEach(comment => {
      renderComment(comment.comment_id, comment.text, comment.likes);
    });
  } catch (error) {
    showError(error);
  }
}

const addComment = async e => {
  e.preventDefault();
  const text = $('#comments-form #text').val();
  if (text.length === 0) return;
  try {
    const addedComment = await request(`comments?text=${text}`, 'post');
    renderComment(addedComment.comment_id, addedComment.text, addedComment.likes);
    $('#comments-form').trigger('reset');
  } catch (error) {
    showError(error);
  }
}

async function handlePatchBtnClick(btn) {
  const commentId = btn.dataset.comment_id;
  try {
    const patchedComment = await request(`comments?comment_id=${commentId}`, 'patch');
    $(btn).find('.badge').text(patchedComment.likes);
  } catch (error) {
    showError(error);
  }
}

async function handleDeleteBtnClick(btn) {
  const commentId = btn.dataset.comment_id;
  try {
    const deletedComment = await request(`comments?comment_id=${commentId}`, 'delete');
    $(btn).parent().parent().remove();
  } catch (error) {
    showError(error);
  }
}

$(function() {
  getCommentsList();
  $('#comments-form').on('submit', addComment);
});


  