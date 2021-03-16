import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from 'faker';

const App = () => {
    return (
        <div className={"ui container comments"}>
            <ApprovalCard>
                <CommentDetail author={"Sam"} timeAgo={"Today at 4:45PM"}
                               content={"Lorem ipsum dolor sit amet, consectetur adipiscing elitt!"}
                               avatar={faker.image.animals()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={"Alex"} timeAgo={"Today at 6:00PM"}
                               avatar={faker.image.abstract()}
                               content={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}/>
            </ApprovalCard>
            <ApprovalCard>

                <CommentDetail author={"Jane"} timeAgo={"Today at 7:12PM"}
                               avatar={faker.image.people()}
                               content={"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>
    , document.querySelector('#root'));
