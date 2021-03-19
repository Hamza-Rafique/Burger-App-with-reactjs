import React from 'react';
import Aux from '../hoc/Aux';

const layout = () => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
)