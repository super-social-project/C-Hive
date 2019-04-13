import React from 'react'
import styled from 'styled-components'

const ArticleSummary = ({article}) => (
    <Article>
        <section>
            <header>
                <h3>{article.title}</h3>
            </header>
            <div className='summary'>
                <pre>{article.summary}...</pre>
            </div>
        </section>
        <aside>
            <div className='author'>
                <h4>by {article.author}</h4>
            </div>
            <div className='tags'>
                <pre>{article.tags[0]}</pre>
                {article.tags.length > 1 ? <pre> and {article.tags.length -1} more...</pre> : null}
            </div>
            <div className='published'>
                <pre>{article.published}</pre>
            </div>
        </aside>
    </Article>
)

const Article = styled.article`
    background-color: #EBEBEB;
    border-radius: 0.8rem;
    margin: 1rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    section {
        header {
            color: #000;
            font-size: 3.1rem;
        }
        .summary {
            color: #353635;
            font-size: 2rem;
            margin: 1rem 0;
        }
    }
    aside {
        width: 20rem;
        font-size: 1.7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div {
            display: flex;
            span, pre {
                color: #7A7A7A;
            }
        }
        .author {
            color: #353635;
            font-size: 2.2rem;
        }
        .published {
            justify-content: flex-end;
        }
        .tags {
            
            pre {
                line-height: 2.4rem;

                &:first-of-type {
                    background-color: #C2C2C2;
                    border: 1px solid #707070;
                    border-radius: 2.4rem;
                    color: #010101;
                    display: block;
                    text-align: center;
                    height: 2.4rem;
                    width: 7.8rem;
                }
            }
        }
    }
`

export default ArticleSummary