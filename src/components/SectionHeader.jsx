import PropTypes from 'prop-types'

SectionHeader.propTypes = {
    txt: PropTypes.string.isRequired,
};

export default function SectionHeader({txt}){
    return (
        <div>
            <h1 style={{fontWeight: 900, letterSpacing: '0.2em'}}>{ txt }</h1>
            <hr className="solid"/>
        </div>
    )
}