import { connect } from 'react-redux';
import Investments from './Investments.component';

const mapStateToProps = ({ investments }) => ({ investments });
const matchDispatchToProps = ({});

export default connect(mapStateToProps, matchDispatchToProps)(Investments);