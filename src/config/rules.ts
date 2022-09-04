const rules = {
    "default" : {}
};

export const defaultRule = {
    "default" : true
}

export default rules;
export type RuleKey = keyof typeof rules;

export type Rule = typeof defaultRule
