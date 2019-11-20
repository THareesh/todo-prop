import React from 'react';

const Form = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-lg-6 m-auto">
                        <form onSubmit={props.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={props.handleChange}
                                    value={props.name}
                                />
                            </div>
    <button className={`btn btn-${props.id !==null?'success':'primary'} float-left`}>{props.id !==null?'Update':'Submit'}</button>
                        </form>
                        <button className="btn btn-danger float-right" onClick={props.deleteAll}>RemoveAll</button>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Form