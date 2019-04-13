import React, { Component } from 'react'
import styled from 'styled-components'

import ArticleSummary from './articleSummary'

class TrendingArticles extends Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    componentDidMount = () => {
        //pulled from server?
        this.setState({
            articles: [
                {
                    id: 1018,
                    title: `The Rookie's Guide to Git`,
                    author: `Wesley Crusher`,
                    published: `April 8,2019`,
                    tags: [`Git`,`Pizza`,`Crushinator`],
                    summary: `Everything I wish I had known when starting with Git`,
                },
                {
                    id: 976,
                    title: `AJAX/HTTP: Intro`,
                    author: `Beverly Crusher`,
                    published: `April 8,2019`,
                    tags: [`HTTP`,`Beavers`,`Burrito`],
                    summary: `A quick overview of what AJAX/HTTP is and what it's for`,
                },
                {
                    id: 1118,
                    title: `Why Being Semantic Matters`,
                    author: `William Riker`,
                    published: `April 8,2019`,
                    tags: [`HTML`,`Rakes`,`Duct Tape`],
                    summary: `It's not just a sarcastic reply. It is important and here's why`,
                },
                {
                    id: 17,
                    title: `Something ado with CSS`,
                    author: `Chakotay`,
                    published: `April 8,2019`,
                    tags: [`CSS`,`Resistance`,`Spirit Animals`],
                    summary: `So you want to improve the layout and looks of your site?`,
                },
            ]
        })
    }
    render = () => {
        return (
            <Wrapper>
                <header>
                    <h2>Trending Articles</h2>
                </header>
                <div className='articles'>
                    {this.state.articles.map(article => <ArticleSummary article={article}/>)}
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
    background-color: #464646;
    font-family: Segoe UI;
    font-size: 2rem;
    padding: 1rem;

    header {
        color: #EBEBEB;
        font-size: 4.9rem;
    }
`

export default TrendingArticles