
//https://github.com/Evo-Forge/Essence/tree/master/components/essence-stepper

import React from 'react';
import classNames from 'classnames';
import utils from '../utils';


class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documentSize: utils.client.documentSize(),
            selected: props.currentStep,
            maxSteps: props.steps.length,
            currentStep: props.currentStep,
            activeColor: props.activeColor,
            inactiveColor: props.inactiveColor,
        	classes: classNames(
                props.classes,
                props.className
            ),
        };
    }

    componentDidMount() {
        let self = this;

        window.addEventListener('resize', function() {
            self.setState({
                documentSize: utils.client.documentSize()
            });
        }, true);
    }

    selectStepper(callback, index) {
        if (this.props.editable) {
            this.setState({
                selected: index,
                currentStep: index
            });

            if (callback) {
                return callback();
            }
        }
    }

    continueStepper(callback) {
        let nextStep = this.state.currentStep+1;

        this.setState({
            selected: nextStep,
            currentStep: nextStep
        });

        if (callback) {
            return callback(nextStep);
        }
    }

    backStepper(callback) {
        let nextStep = this.state.currentStep-1;
        this.setState({
            selected: nextStep,
            currentStep: nextStep
        });

        if (callback) {
            return callback(nextStep);
        }
    }

    renderHorizontal() {
        let self = this,
            stepsHeader = null,
            stepsContent = null,
            steps = this.props.steps;

        if (steps.length > 0) {
            let stepsHeader = steps.map(function (item, key) {
                if (!item.title) return(null);
                return (
                    <li 
                        key={'stepper-'+key}
                        onClick={self.selectStepper.bind(self, item.callback, key)}
                        onTouch={self.selectStepper.bind(self, item.callback, key)}
                        className={classNames({progress: self.state.currentStep > key, active: self.state.selected === key})}>
                        <a>
                            <span className={
                                classNames(
                                    'step-icon', 
                                    (self.state.currentStep > key || self.state.selected === key ? self.state.activeColor : ''), 
                                    (self.state.currentStep < key ? self.state.inactiveColor : '')
                                )}>
                            {self.state.currentStep > key ? <i className={'e-icon-action-done'} /> : (key + 1)}</span>
                            <span className={classNames('title', {'hasOptional': item.optional})}>
                            {item.title}
                            {item.optional ? (<div className={'optional'}>{item.optional}</div>) : null}
                            </span>
                            {(steps.length - 1) !== key && item.title ? <span className={'connector'} /> : null}
                        </a>
                    </li>
                )
            });

            let stepsContent = steps.map(function (item, key) {
                let active = (self.state.selected === key);
                return (
                    <div key={'stepper-content-'+key} className={classNames('e-stepper-content', {active: active})}>
                        {item.content}
                    </div>
                )
            });
            
            return (
                <div>
                    <nav className={classNames('e-steppers', this.state.classes, {noneditable: !this.props.editable})}>
                        <ul className={'e-steppers-list e-no-padding'} ref={(ref) => this.stepperList = ref}>
                            {stepsHeader}
                        </ul>
                    </nav>
                    <div className={classNames('e-steppers-container')}>
                        {stepsContent}
                        {this.renderActions()}
                    </div>
                </div>
            );
        }
        return;
    }

    renderVertical() {
        let self = this,
            stepsItems = null,
            steps = this.props.steps;

        if (steps.length > 0) {
            let stepsItems = steps.map(function (item, key) {
                if (!item.title) return(null);
                return (
                    <div key={'stepper-'+key}
                        className={classNames({progress: self.state.currentStep > key, active: self.state.selected === key})}>
                        <div className={'e-steppers-list'}>
                            <span className={classNames(
                                    'step-icon', 
                                    (self.state.currentStep > key || self.state.selected === key ? self.state.activeColor : ''), 
                                    (self.state.currentStep < key ? self.state.inactiveColor : '')
                                )}>
                            {self.state.currentStep > key ? <i className={'e-icon-action-done'} /> : (key + 1)}</span>
                            <span className={classNames('title', {'hasOptional': item.optional})}>
                            {item.title}
                            {item.optional ? (<div className={'optional'}>{item.optional}</div>) : null}
                            </span>
                        </div>
                        <div className={'e-steppers-container'}>
                            <div className={classNames('e-stepper-content', {active: (self.state.selected === key)})}>
                                {(steps.length - 1) !== key ? <span className={'connector'} /> : null}
                                {item.content}
                                {self.renderActions()}
                            </div>
                        </div>
                    </div>
                )
            });
            
            return (
                <div className={'e-steppers vertical'}>{stepsItems}</div>
            );
        }
        return;
    }

    renderActions() {
        if (this.props.steps.length > 0) {
            return (
                <div className={'e-padding-top-10 clearfix e-stepper-actions'}>
                    {
                        (this.state.documentSize < 3) || (this.props.onBack && this.state.currentStep > 0) ? 
                        (<button 
                            onClick={this.backStepper.bind(this, this.props.onBack)} 
                            className={'e-btn-default flat e-text-grey-400 e-left'} 
                            style={{backgroundColor: 'transparent'}}>BACK</button>)
                        : null
                    }
                    {
                        (this.state.documentSize < 3) || (this.props.onContinue && this.state.currentStep < this.state.maxSteps) ? 
                        (<button 
                            onClick={this.continueStepper.bind(this, this.props.onContinue)} 
                            className={'e-btn-default flat e-text-blue-500 e-right'} 
                            style={{backgroundColor: 'transparent'}}>CONTINUE</button>)
                        : null
                    }
                </div>
            )
        }
    }

	render() {

        if (this.state.documentSize < 3) {
            return this.renderVertical();
        }

		return (this.props.type === 'vertical') ? this.renderVertical() : this.renderHorizontal();
    }
}

Stepper.defaultProps = {
    steps: {},
    type: 'horizontal',
    activeColor: 'e-background-indigo-400',
    inactiveColor: 'e-background-grey-400',
    editable: true,
    currentStep: 0,
    onContinue: null,
    onBack: null
};

export default Stepper;