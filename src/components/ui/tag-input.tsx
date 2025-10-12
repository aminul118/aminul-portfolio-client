'use client';

import { Tag, TagInput } from 'emblor';
import { useEffect, useId, useState } from 'react';

interface TagInputExampleProps {
  value?: string[];
  onChange?: (newTags: string[]) => void;
}

export default function TagInputExample({
  value = [],
  onChange,
}: TagInputExampleProps) {
  const id = useId();
  const [tags, setTags] = useState<Tag[]>(
    value.map((v, i) => ({ id: String(i), text: v })),
  );
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  // Sync with form when tags change
  useEffect(() => {
    onChange?.(tags.map((t) => t.text));
  }, [onChange, tags]);

  return (
    <TagInput
      id={id}
      tags={tags}
      setTags={setTags}
      placeholder="Add a technology (e.g. React, Node.js)"
      styleClasses={{
        inlineTagsContainer:
          'border-primary/20 rounded-md bg-background shadow-xs transition-[color,box-shadow] focus-within:border-ring outline-none focus-within:ring-[1px] focus-within:ring-ring/50 p-1 gap-1',
        input: 'w-full min-w-[80px] shadow-none px-2 h-7',
        tag: {
          body: 'relative bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7',
          closeButton:
            'absolute -inset-y-px -end-px p-0 rounded-e-md flex size-7 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-muted-foreground/80 hover:text-foreground',
        },
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
    />
  );
}
