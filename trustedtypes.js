if (typeof trustedTypes !== 'undefined') {
  const policyFoo = trustedTypes.createPolicy('foo', {});
}

document.body.innerHTML = policyFoo.createHTML('foo');