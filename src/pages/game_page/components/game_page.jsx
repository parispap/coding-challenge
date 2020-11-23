import React from 'react';
import { connect } from "react-redux";
import UsersPanel from './users_panel';


const game_page =() => {
    return (
        <div>
            <div>
                {/* image */}
            </div>

            <div>
                {/* card board */}
            </div>

            <div>
                <UsersPanel/>
            </div>
        </div>
        
    )
}

export default game_page