import React, { Component } from 'react'
import PropTypes, { element } from 'prop-types'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Andrew Williams",
            "title": "Fairphone Has a New Plan to Get You to Care",
            "description": "WIRED loves Fairphone and everything it stands for—but people just aren't buying its devices, and the few who have don't need to upgrade.",
            "url": "https://www.wired.com/story/fairphone-proves-you-really-dont-give-a-damn/",
            "urlToImage": "https://media.wired.com/photos/685efd83c3016ccff190a75d/191:100/w_1280,c_limit/Fairphone-Proves-You-Don%E2%80%99t-Give-a-Damn-Gear54612585841_5f9fe29032_o.jpg",
            "publishedAt": "2025-06-29T11:00:00Z",
            "content": "Fairphone has released a new phone, the Fairphone 6. The series began in 2013, and there's still nothing else quite like it, anywhere. These mobile phones are what almost all other tech is not: ethical… [+2723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slate Magazine"
            },
            "author": "Lizzie O'Leary",
            "title": "The FTC's Merger Shakedown",
            "description": "Inside the FTC's conditions for an advertising merger.",
            "url": "https://slate.com/podcasts/what-next-tbd/2025/06/how-the-ftc-is-fighting-back-against-x-advertising-boycotts",
            "urlToImage": "https://compote.slate.com/images/722e0f01-84a4-42ae-93af-b010e8a8e71a.jpeg?crop=4500%2C3000%2Cx0%2Cy0&width=1560",
            "publishedAt": "2025-06-29T09:30:00Z",
            "content": "Under a normal administration, a merger between two large advertising firms might attract the government's interest for anti-monopoly reasons. Under this one, the Federal Trade Commission is creating … [+479 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Alberto García",
            "title": "Final fireworks of Red Friday and Web Gaming Week. Five offers to take advantage of MediaMarkt's campaigns during the weekend",
            "description": "In a few weeks, the next Amazon Prime Day 2025 will be held and stores are already launching very powerful campaigns regarding offers. MediaMarkt right now, and until next July 1, has two very big campaigns active: the final fireworks of Red Friday and Web Gaming Week.",
            "url": "https://www.xataka.com/seleccion/traca-final-red-friday-semana-web-gaming-cinco-ofertas-para-aprovechar-campanas-mediamarkt-durante-fin-semana",
            "urlToImage": "https://i.blogs.es/e9a2ed/mediamarkt/840_560.jpeg",
            "publishedAt": "2025-06-29T08:30:05Z",
            "content": "In a few weeks, the next Amazon Prime Day 2025 will be held and stores are already launching very powerful campaigns regarding offers. MediaMarkt right now, and until next July 1, has two very big campaigns active: the final fireworks of Red Friday and Web Gaming Week… [+3707 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Alejandro Alcolea",
            "title": "In 2017 the iPhone revolutionized smartphones and in the process caused the swan song of fun phones",
            "description": "Do you remember the Nokia era? I still don't know how they did it, but at their peak, the Finnish company not only launched many phones, but each one was unique. Crazy designs, some extravagant and others that made no sense at all.",
            "url": "https://www.xataka.com/moviles/2017-iphone-revoluciono-smartphones-supuso-canto-cisne-moviles-divertidos",
            "urlToImage": "https://i.blogs.es/38d0cd/original/840_560.jpeg",
            "publishedAt": "2025-06-29T11:30:05Z",
            "content": "Do you remember the Nokia era? I still don't know how they did it, but at their peak, the Finnish company not only launched many phones, but each one was unique. Crazy designs, some extravagant and others that made no sense at all… [+15541 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {

            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>This is a news Component</h2>

                <div className="row">

                    {this.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsItems key={element.url} title={element.title.slice(0, 10)} description={element.description.slice(0, 88)} imageURL={element.urlToImage} newsURL={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }

}

export default News
