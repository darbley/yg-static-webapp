'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the amazaning ${chalk.red('generator-static-webapp')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Are you ready to code?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')      
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('htaccess.txt'),
      this.destinationPath('src/.htaccess')      
    );
    
  }

  install() {
    //this.installDependencies();
  }
};
