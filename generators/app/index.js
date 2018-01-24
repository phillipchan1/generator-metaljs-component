'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(`Let's generatote a ${chalk.red('metaljs component')}!`));

    var prompts = [
      {
        name: 'componentName',
        message: `What is your component's name?`,
        default: this.componentName,
        required: true
      }
    ];

    return this.prompt(prompts).then(
      function(props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
      }.bind(this)
    );
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('Component.js'),
      this.destinationPath(
        `${this.props.componentName}/${this.props.componentName}.js`
      ),
      {
        componentName: this.props.componentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(`${this.props.componentName}/index.js`),
      {
        componentName: this.props.componentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('Styles.scss'),
      this.destinationPath(
        `${this.props.componentName}/${this.props.componentName}.scss`
      ),
      {
        componentName: this.props.componentName
      }
    );
  },

  install: function() {
    this.installDependencies();
  }
});
