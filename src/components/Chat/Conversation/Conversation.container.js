import { connect } from 'react-redux';
import { sendMessage, showShadow, hideShadow } from '../../../actions';
import Conversation from './Conversation.component';

const mapStateToProps = ({ messages, users }) => ({ messages, users });
const matchDispatchToProps = { sendMessage, showShadow, hideShadow };

export default connect(mapStateToProps, matchDispatchToProps)(Conversation);