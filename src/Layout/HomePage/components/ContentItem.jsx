import React from 'react';

const ContentItem = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {Array.from({length: 5}, (_,index) => 
                <div key={index} className="col">
                    <div className="card">
                        <img src={`https://cataas.com/cat?width=500&height=${300+index}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>)}
        </div>
        </div>
    );
}

export default ContentItem;