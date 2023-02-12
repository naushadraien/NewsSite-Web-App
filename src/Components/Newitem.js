import React, { Component } from 'react'

export class Newitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                        </div>
                    <img src={!imageUrl ? "https://images.livemint.com/img/2023/02/11/600x338/Priyanka_Gandhi__1676107183644_1676107183854_1676107183854.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p> */}
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* Here new Date(date).toGMTString() is used for showing the date props in GMT format */}
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Readmore</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newitem
