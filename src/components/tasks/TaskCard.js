import React from 'react';
import { Card, Typography, Chip, Button } from '@material-ui/core';
import { format } from 'date-fns';

const TaskCard = ({ task, onStatusUpdate }) => {
  return (
    <Card className="task-card">
      <div className="task-header">
        <Typography variant="h6">{task.title}</Typography>
        <Chip label={task.status} color={task.status === 'completed' ? 'primary' : 'default'} />
      </div>
      <Typography variant="body2">{task.description}</Typography>
      <div className="task-footer">
        <Typography variant="caption">
          Due: {format(new Date(task.deadline), 'MMM dd, yyyy')}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => onStatusUpdate(task.id, 'completed')}
        >
          Mark Complete
        </Button>
      </div>
    </Card>
  );
};