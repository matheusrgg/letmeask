import { ReactNode } from 'react';
import './styles.scss';
import classNames from 'classnames';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?:boolean;
    isHighlighted?:boolean;
}




export function Question({
    content, 
    author, 
    children,
    isAnswered = false,
    isHighlighted = false
}: QuestionProps) {

    // console.log(author)
    return (
        <div className={classNames(
            'question',
            { answered: isAnswered },
            { highlighted: isHighlighted && !isAnswered }
        )}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                {/*  isso vai ser customizável dependendo da onde a question for mostrada */}
                <div>{children}</div>
            </footer>
        </div>
    )
}