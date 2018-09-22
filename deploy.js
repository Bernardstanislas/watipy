const ghpages = require('gh-pages');

const circleUser = {
    name: 'CircleCI',
    email: 'circle@ci.com'
};

let repo = 'git@github.com:Bernardstanislas/watipy.git';

if (process.argv.slice(2)[0] === 'production') {
    repo = 'git@github.com:Bernardstanislas/watipy-production.git';
}

ghpages.publish('build', {
    user: circleUser,
    repo
}, function(err) {
    console.error(err);
});
