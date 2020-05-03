import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import {chnageDescription} from './todoActions'

const TodoForm = props => {

    const keyHandler = (e) => {
        if (e.key == 'Enter') {
            e.shiftKey ?  props.handleSearch() : props.handleAdd()
        } else if (e.key == 'Escape') {
            props.handleClear()
        }
    }

    return (
        (
            <dif role='form' className='todoForm' >
                <Grid cols='12 9 10'>
                    <input  
                        id='description' 
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={props.chnageDescription}
                        onKeyUp={keyHandler}
                        value={props.description}></input>
                </Grid>
                <Grid cols='12 3 2' >
                   <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={props.handleClear}></IconButton>
                 </Grid> 
            </dif>
        )
    )
} 

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({chnageDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)