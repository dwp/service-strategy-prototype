//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/saveContinue-answer', function(request, response) {

    var SaveContinue = request.session.data['SaveContinue']
    if (SaveContinue == "yes"){
        response.redirect("/smp-version-0-1/onelogin/gds/sign-in-or-create")
    } else {
        response.redirect("/smp-version-0-1/task-list")
    }
})
