import { connect } from 'react-redux';
import { sendMessage } from '../../../../actions';
import BillInfo from './BillInfo.component';

const mapStateToProps = ({ users, bills }) => ({ users, bills });
const matchDispatchToProps = { sendMessage };

export default connect(mapStateToProps, matchDispatchToProps)(BillInfo);