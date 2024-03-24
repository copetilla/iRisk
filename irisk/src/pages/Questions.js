import React from 'react'
import { useState } from 'react';
import data from '../data';
import { Link, useParams } from 'react-router-dom';
import ModalPage from './ModalPage';


function Questions() {

    let arrFilter = [];
    let colNum;
    let classcol;


    const { section } = useParams();

    const [questionGo, setquestionGo] = useState(0);
    const [Points, setPoints] = useState(0);
    const [AcessMethod, setAcessMethod] = useState(null);

    const allStatesThird = (points, AM) => {
        setquestionGo(questionGo => questionGo + 1);
        setPoints(Points => Points + points);
        setAcessMethod(AM)
    }

    if (section === 'TP') {
        if (questionGo >= 3) {
            data.third.map(item => {
                const questionsFil = item.questions.filter(itemF => itemF.AM === null || itemF.AM === AcessMethod)
                const newObject = {
                    title: item.title,
                    questions: questionsFil
                }
                if (newObject.questions.length !== 0) {
                    arrFilter.push(newObject);
                }
            })

            if (arrFilter[questionGo]) {
                colNum = arrFilter[questionGo].questions.length;
            }

        } else {
            colNum = data.third[questionGo].questions.length;
        }
    }

    if (section === 'C' && data.company[questionGo]) {
        colNum = data.company[questionGo].questions.length;
        console.log(colNum);
    };


    if (colNum === 2) {
        console.log('aqui entro 2')
        classcol = 'col-sm-12 col-md-6 col-lg-6'
    }
    else if (colNum === 3) {
        console.log('aqui entro 3')
        classcol = 'col-sm-12 col-md-4 col-lg-4'
    }
    else if (colNum === 4) {
        console.log('aqui entro 4')
        classcol = 'col-sm-6 col-md-3 col-lg-3'
    }

    let sectionContent;
    switch (section) {
        case 'debut':
            sectionContent = (
                <>
                    <div className='d-flex text-center justify-content-center'>
                        <h1>{data.PSlist.name}</h1>
                        <ModalPage info={'Choose your Processing Scenario!'} />

                    </div>
                    <div className='row'>
                        {data.PSlist.questions.map(item => (
                            <div key={item.id} className='col-sm-12 col-md-4 col-lg-4'>
                                <Link className='btn btn-outline-light my-5 btns' to={`/Questions/${item.id}`}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </>
            );

            break;
        case 'TP':
            sectionContent = (
                <>
                    {questionGo < 3 ?
                        <>

                            <div className='d-flex text-center justify-content-center'>
                                <h1>{data.third[questionGo].title}</h1>
                                <ModalPage info={data.third[questionGo].info} />

                            </div>
                            <div className='row'>
                                {data.third[questionGo].questions.map(item => (
                                    <div key={item.text} className={classcol}>
                                        <button className='btn btn-outline-light my-5 btns' onClick={() => allStatesThird(item.points, item.AM)}>{item.text}</button>
                                    </div>
                                ))}
                            </div>
                        </>
                        :
                        !arrFilter[questionGo] ? <Link className='btn btn-outline-light my-5 btns' to={`/Result/${Points}`}>End</Link> :
                            <>

                                <div className='d-flex text-center justify-content-center'>
                                    <h1>{arrFilter[questionGo].title}</h1>
                                    <ModalPage info={data.third[questionGo].info} />

                                </div>
                                <div className='row'>
                                    {arrFilter[questionGo].questions.map(item => (
                                        <div key={item.text} className={classcol}>
                                            <button className='btn btn-outline-light my-5 btns' onClick={() => allStatesThird(item.points, item.AM)}>{item.text}</button>
                                        </div>
                                    ))}
                                </div>
                            </>
                    }
                </>
            );
            break;
        case 'C':
            sectionContent = (
                !data.company[questionGo] ? <Link className='btn btn-outline-light my-5 btns' to={`/Result/${Points}`}>End</Link> :
                    <>


                        <div className='d-flex text-center justify-content-center'>
                            <h1>{data.company[questionGo].title}</h1>
                            <ModalPage info={data.company[questionGo].info} />

                        </div>
                        <div className='row'>
                            {data.company[questionGo].questions.map(item => (
                                <div key={item.text} className={classcol}>
                                    <button className='btn btn-outline-light my-5 btns' onClick={() => allStatesThird(item.points, item.AM)}>{item.text}</button>
                                </div>
                            ))}
                        </div>
                    </>
            )
            break;
        case 'ND':
            sectionContent = (
                !data.noData[questionGo] ? <Link className='btn btn-outline-light my-5 btns' to={`/Result/${Points}`}>End</Link> :
                    <>

                        <div className='d-flex text-center justify-content-center'>
                            <h1>{data.noData[questionGo].title}</h1>
                            <ModalPage info={data.noData[questionGo].info} />

                        </div>
                        <div className='row'>
                            {data.noData[questionGo].questions.map(item => (
                                <div key={item.text} className='col-sm-12 col-md-4 col-lg-4'>
                                    <button className='btn btn-outline-light my-5 btns' onClick={() => allStatesThird(item.points, item.AM)} to={`/Result/${Points}`}>{item.text}</button>
                                </div>
                            ))}
                        </div>
                    </>
            )
            break;
        default:
            sectionContent = <h2>Error</h2>;
    }

    return (
        <div className='welcome text-center'>

            {sectionContent}


        </div>
    )
}

export default Questions