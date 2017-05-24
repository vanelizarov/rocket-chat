import { connect } from 'react-redux';
import { sendMessage } from '../../../actions';
import Input from './Input.component';

const mapStateToProps = ({ users, messages }) => ({ shadow: messages.shadow, users });
const matchDispatchToProps = { sendMessage };

export default connect(mapStateToProps, matchDispatchToProps)(Input);