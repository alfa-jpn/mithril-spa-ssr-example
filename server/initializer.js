'use strict';
import browserMock from 'mithril/test-utils/browserMock';
import xhr         from 'w3c-xmlhttprequest';

browserMock(global);
global.window.XMLHttpRequest = xhr;
