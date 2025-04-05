import React from 'react';

const ContentItem = (props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {props.setOfLabels.map((item,index) => 
                    <div key={item.id} className="col">
                        <div className="card">
                            <img src={`https://cataas.com/cat?width=500&height=${300+index}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.body}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default ContentItem;