import React, { useState } from 'react';
import { TextField, Button, List, ListItem, Typography } from '@material-ui/core';

const commentSection = ({ taskId, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(taskId, newComment);
    setNewComment('');
  };

  return (
    <div className="comments-section">
      <Typography variant="h6">Comments</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={2}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <Button type="submit" variant="contained" color="primary">
          Add Comment
        </Button>
      </form>
      <List>
        {comments.map(comment => (
          <ListItem key={comment.id}>
            <div>
              <Typography variant="subtitle2">{comment.user.username}</Typography>
              <Typography variant="body2">{comment.content}</Typography>
              <Typography variant="caption">
                {format(new Date(comment.createdAt), 'MMM dd, yyyy HH:mm')}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};