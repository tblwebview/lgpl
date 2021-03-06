// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(async function() {
  TestRunner.addResult(`Verify javascript outline\n`);
  await TestRunner.loadModule('sources_test_runner');
  await TestRunner.showPanel('sources');

  var test = SourcesTestRunner.testJavascriptOutline;

  TestRunner.markStep('testComputedProperty');
  await test('a.b[c] = function() { };');

  TestRunner.markStep('testComputedPropertyInTheMiddle');
  await test('a.b[c].d = function() { };');

  TestRunner.markStep('testComputedPropertyForExpression');
  await test('(a || b).c = function() { };');

  TestRunner.markStep('testPropertyStringLiteral');
  await test('var foo = { "bar": function() { }}');

  TestRunner.markStep('testPropertyNumberLiteral');
  await test('var foo = { 42: function() { }}');

  TestRunner.completeTest();
})();
