import { connect } from 'react-redux';
import Bills from './Bills.component';

const mapStateToProps = ({ bills }) => ({ bills });
const matchDispatchToProps = {};

export default connect(mapStateToProps, matchDispatchToProps)(Bills);