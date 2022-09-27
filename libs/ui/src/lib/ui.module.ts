import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { FormItemComponent } from './form-item/form-item.component';
import { InputComponent } from './input/input.component';
import { RadioButtonsComponent } from './radio-button/radio-buttons/radio-buttons.component';
import { RadioButtonComponent } from './radio-button/radio-button/radio-button.component';
import { StepComponent } from './steps/step/step.component';
import { IconComponent } from './icons/icon/icon.component';
import { LabeledIconComponent } from './icons/labeled-icon/labeled-icon.component';
import { StepsComponent } from './steps/steps/steps.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';
import { TextareaComponent } from './textarea/textarea.component';
import { OptionButtonComponent } from './radio-button/option-button/option-button.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemDirective } from './accordion/directives/accordion-item.directive';
import { AccordionContentDirective } from './accordion/directives/accordion-content.directive';
import { AccordionTitleDirective } from './accordion/directives/accordion-title.directive';
import { AccordionHeaderDirective } from './accordion/directives/accordion-header.directive';
import { HtmlSectionComponent } from './html-section/html-section.component';
import { SafeHtmlPipe } from './pipes/safe-html-pipe';
import { NotificationComponent } from './notification/notification.component';
import { NotificationSeverityToHeaderIconPipe } from './notification/notification-severity-to-header-icon.pipe';
import { IconsRegistry } from './icons/icons-registry.service';
import {
  veeraArrowALeft,
  veeraArrowARight,
  veeraCall,
  veeraCheckCircleOutline,
  veeraClose,
  veeraEmail,
  veeraErrorOutline,
  veeraHappyFace,
  veeraInfo,
  veeraLocation,
  veeraSadFace,
  veeraScreenShare,
  veeraWarningAmber,
} from '@ria/veera-icons';

const components = [
  ButtonComponent,
  InputComponent,
  FormItemComponent,
  IconComponent,
  LabeledIconComponent,
  StepsComponent,
  StepComponent,
  RadioButtonsComponent,
  RadioButtonComponent,
  OptionButtonComponent,
  FeedbackComponent,
  TextareaComponent,
  HtmlSectionComponent,
  AccordionComponent,
  AccordionItemDirective,
  AccordionContentDirective,
  AccordionTitleDirective,
  AccordionHeaderDirective,
  NotificationComponent,
];

const pipes = [SafeHtmlPipe, NotificationSeverityToHeaderIconPipe];

@NgModule({
  imports: [CommonModule, TextFieldModule],
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes, TextFieldModule],
})
export class UiModule {
  constructor(private registry: IconsRegistry) {
    this.registry.registerIcons([
      veeraCall,
      veeraClose,
      veeraInfo,
      veeraCheckCircleOutline,
      veeraWarningAmber,
      veeraErrorOutline,
      veeraArrowALeft,
      veeraArrowARight,
      veeraSadFace,
      veeraHappyFace,
      veeraScreenShare,
      veeraEmail,
      veeraLocation,
    ]);
  }
}
