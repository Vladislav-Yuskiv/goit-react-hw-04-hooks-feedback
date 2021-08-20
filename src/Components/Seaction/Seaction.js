import React from 'react';
import s from './Seaction.module.css';
import PropTypes from "prop-types";
function Section ({ title , children }){
        return (
            <section>
                <h2 className={s.title}>{title}</h2>
                {children}
            </section>
        )
    }

Section.propTypes = {
    title : PropTypes.string ,
}
export default Section;