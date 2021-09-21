import React from 'react';

 const LANGUAGES = [
   'javascripy',
   'PHP',
   'Ruby',
   'java',
   'Go',
   'C++'
 ];

export class List extends React.Component {
  render() {
    return(
      <div>
        {
          LANGUAGES.map((lang : string, index : number) => {
            return <div key={index}>{ lang }</div>
          })
        }
      </div>
    )
  }
}

export default List;
