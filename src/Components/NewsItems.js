import React, { Component } from 'react'

export class NewsItems extends Component {


    render() {
        let { title, description, imageURL, newsURL } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}
                >
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsURL} target='_blank' className="btn btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
