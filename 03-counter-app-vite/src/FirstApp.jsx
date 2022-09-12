import PropTypes from 'prop-types';


function FirsApp({title}){
    


    return (
    <>
    <h1>{title}</h1>
    <p>Soy un subitutlo</p>
    </>
    )
}

FirsApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirsApp.defaultProps = {
    title: 'No hay titulo'
}

export default FirsApp;