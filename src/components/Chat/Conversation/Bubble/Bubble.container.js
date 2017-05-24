import { connect } from 'react-redux';
import { sendMessage } from '../../../../actions';
import Bubble from './Bubble.component';

const mapStateToProps = ({ users, bills }) => ({ users, bills });
const matchDispatchToProps = { sendMessage };

export default connect(mapStateToProps, matchDispatchToProps)(Bubble);