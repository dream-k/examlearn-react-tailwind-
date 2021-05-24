import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Home from './views/Home'
import Login from './views/Auth/Login'
import Register from './views/Auth/Register'
import AgeVerification from './views/Auth/Register/AgeVerification'
import ParentPermission from './views/Auth/Register/ParentPermission'
import Thankyou from './views/Auth/Register/Thankyou'
import Pricing from './views/Pricing'
import ContactUs from './views/ContactUs'
import RegistrationForm from './views/Auth/Register/RegistrationForm'
import Congratulation from './views/Auth/Register/Congratulation'
import SubjectOverview from './views/SubjectOverview'
import SubjectPreview from './views/SubjectOverview/Preview'
import QuizFinish from './views/SubjectOverview/Quizzes/Finish'

// import { Loading, ProtectedRoute } from '../components/commons'

const PrivateRoute = () => {
  const token = localStorage.getItem("token")

  
}

const Routes = props => {
  return (
    <>
      {/* <Loading loading={props.loading} /> */}
      <div className="main">
        <div className="content-wrapper">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Register} />
                <Route path="/age-verification" component={AgeVerification} />
                <Route path="/parent-permission" component={ParentPermission} />
                <Route path="/thankyou" component={Thankyou} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/registration-form" component={RegistrationForm} />
                <Route path="/contratulations" component={Congratulation} />
                <Route exact path="/subject/:param" component={SubjectOverview} />
                <Route path="/subject/:param/preview" component={SubjectPreview} />
                <Route path="/subject/quizzes/finish" component={QuizFinish} />
                {/* <Route path={pathKeys.FORGOT_PASSWORD} component={ForgotPassword} />
                <Route path={pathKeys.RESET_PASSWORD} component={ResetPassword} /> */}
                {/* {isAccountant ? (
                <ProtectedRoute path={pathKeys.ACCOUNTANT} component={AccountantContainer} />
                ) : (
                <ProtectedRoute path="/" component={ClientContainer} />
                )} */}
                {/* <Route component={NotFound} /> */}
            </Switch>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = {}

Routes.propTypes = {
  locale: PropTypes.string,
  loading: PropTypes.bool,
}

Routes.defaultProps = {
  locale: '',
  loading: false,
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
