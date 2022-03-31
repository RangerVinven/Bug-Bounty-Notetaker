import React from 'react';
import LongSearch from '../../components/General/LongSearch';
import Title from '../../components/General/Title';
import Subdomain from '../../components/Subdomain/Subdomain';

const SubdomainsPage = () => {

    return (
        <div className="ml-2 font-bold">
            <Title title="Department of Defense"></Title>
            <hr />
            <div className="mt-3">
                <LongSearch></LongSearch>
                <Subdomain subdomain="news.defense.gov" />
            </div>
        </div>
    );
}

export default SubdomainsPage;