import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsPromptInputModule } from '@firestitch/prompt';
import { FsLabelModule } from '@firestitch/label';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import Quill from 'quill';

import { FsEditorRendererModule } from './fs-editor-renderer.module';
import { FsEditorRichTextComponent } from './components/fs-editor-rich-text/fs-editor-rich-text.component';
import { FS_EDITOR_DEBUG_LEVEL, FS_EDITOR_RICH_TEXT_CONFIG } from './fs-editor-rich-text.providers';
import { FsEditorRichTextOptions } from './interfaces/fs-editor-rich-text.interface';


@NgModule({
  imports: [
    CommonModule,
    FsPromptInputModule,
    MatIconModule,
    MatButtonModule,
    FsEditorRendererModule,
    FsLabelModule
  ],
  exports: [
    FsEditorRichTextComponent
  ],
  declarations: [
    FsEditorRichTextComponent,
  ]
})
export class FsEditorRichTextModule {
  static forRoot(config: FsEditorRichTextOptions = {}, debugLevel = 'error'): ModuleWithProviders {
    return {
      ngModule: FsEditorRichTextModule,
      providers: [
        {
          provide: FS_EDITOR_RICH_TEXT_CONFIG,
          useValue: config || {},
        },
        {
          provide: FS_EDITOR_DEBUG_LEVEL,
          useValue: debugLevel,
        },
      ]
    };
  }
}
