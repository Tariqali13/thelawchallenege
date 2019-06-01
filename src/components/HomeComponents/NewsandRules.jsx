import React from 'react';
import RulesandRegulation from './RulesandRegulation/RulesandRegulation'
import News from './NewsComponent/News';
const NewandRUles = () => {
    return (
        <div>
            <div className="Rules_Main" >
                <div className="Divider">
                    <RulesandRegulation />
                    <News />
                </div>
            </div>
        </div >
    );
}

export default NewandRUles;