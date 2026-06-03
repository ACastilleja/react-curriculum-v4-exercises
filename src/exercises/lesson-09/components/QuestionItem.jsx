import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);

  const isEditing = state.ui.editingQuestionId === question.id;
  const [newOptionText, setNewOptionText] = useState('');

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    if (isEditing) {
      dispatch({ type: 'SET_EDITING_QUESTION', payload: null });
      setWorkingText(question.question);
    } else {
      dispatch({ type: 'SET_EDITING_QUESTION', payload: question.id });
      setWorkingText(question.question);
    }
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText },
    });
    dispatch({ type: 'SET_EDITING_QUESTION', payload: null });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      dispatch({ type: 'DELETE_QUESTION', payload: { id: question.id } });
    }
  };

  return (
    <div
      className={`${styles['question-item']} ${isEditing ? styles['editing'] : ''}`}
    >
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          {!isEditing && (
            <button className={styles['delete-btn']} onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <div className={styles['edit-form-group']}>
            <input
              type="text"
              className={styles['question-input']}
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <button className={styles['save-btn']} onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul className={styles['options-list']}>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <div className={styles['option-edit-row']}>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        dispatch({
                          type: 'UPDATE_OPTION_TEXT',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                            newText: e.target.value,
                          },
                        })
                      }
                    />
                    <button
                      className={styles['delete-option-btn']}
                      disabled={question.options.length <= 2}
                      onClick={() =>
                        dispatch({
                          type: 'DELETE_OPTION_FROM_QUESTION',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                          },
                        })
                      }
                    >
                      {' '}
                      Delete
                    </button>
                  </div>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
          </ul>
          {isEditing && (
            <div className={styles['add-options-row']}>
              <input
                type="text"
                placeholder="Type new choice.."
                value={newOptionText}
                onChange={(e) => setNewOptionText(e.target.value)}
              />
              <button
                type="button"
                className={styles['add-option-btn']}
                disabled={!newOptionText.trim()}
                onClick={() => {
                  dispatch({
                    type: 'ADD_OPTION_TO_QUESTION',
                    payload: {
                      questionId: question.id,
                      optionText: newOptionText.trim(),
                    },
                  });
                  setNewOptionText('');
                }}
              >
                + Add Option
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
