import React, {useContext, useState} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import Modal from '../Modal/Modal'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },

    input: {
        marginRight: '1rem',
    }
}

function TodoItem({ todo, index, onChange }) {
    const [modalActive, setModalActive] = useState(false);
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}> 
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index +1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='openConfirmModal' onClick={() => setModalActive(true)}>&times;</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <h2>Confirmation of deletion ToDo Item</h2>
                <div className='buttonsRemove'>
                    <button className='remove' onClick={removeTodo.bind(null, todo.id)}>Delete Todo Item</button>
                    <button className='dontRemove' onClick={() => setModalActive(false)}>Don't delete Todo Item</button>
                </div>
            </Modal>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
