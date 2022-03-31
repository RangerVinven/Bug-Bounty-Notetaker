import React from 'react';
import LongSearch from '../../components/General/LongSearch';
import Title from '../../components/General/Title';
import Subdirectory from '../../components/Subdirectory/Subdirectory';

interface Props {
    subdomain: string
}

const SubdirectoriesPage = (props: Props) => {
    return (
      <div className="ml-2">
          <Title title={props.subdomain.concat(" - Subdirectories")}></Title>
          <hr />

        <div className="mt-3">
            <LongSearch></LongSearch>

            <div>
                <Subdirectory subdirectory="/articles"></Subdirectory>
            </div>

        </div>

      </div>  
    );
}

export default SubdirectoriesPage;