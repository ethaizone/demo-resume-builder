import { describe, it, expect } from 'vitest'
import { availableTemplates, parseTemplateName } from '../index'

describe('parseTemplateName function', () => {
  it('should return template name when a valid template name is provided', () => {
    const templateName = availableTemplates[0];
    const result = parseTemplateName(templateName);
    expect(result).toEqual(templateName);
  });

  it('should return undefined when an invalid template name is provided', () => {
    const templateName = 'invalidTemplate';
    const result = parseTemplateName(templateName);
    expect(result).toBeUndefined();
  });
});
