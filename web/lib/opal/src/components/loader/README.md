# Loader

**Import:** `import { CortexLoader } from "@opal/components";`

The Cortex One mark: the C-ring rotates a full turn while the core dot pulses, on a 2s loop. It takes a `color` token (default `border-02`) and holds still under `prefers-reduced-motion`.

```tsx
<CortexLoader />
<CortexLoader size={24} color="text-04" />
```

Props: `size` (px, default 64 with a ~3px stroke that scales), `color` (`LoaderColor`, default `border-02`). The mark geometry matches the `@opal/icons` `cortex-ring` and `cortex-logo` paths. The stroke is defined locally rather than reusing those icon components so its weight can be tuned.

The loaders for app use (`PageLoader`, `IconLoader`, `CardLoader`, `LineLoader`, `TextLoader`) live in `@opal/loaders`.
