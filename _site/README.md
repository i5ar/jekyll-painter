# Jekyll Painter

A [Jekyll][jekyllrb] theme for creating [Reveal.js][reveal.js] presentation along with [Lazy Line Painter][lazy-line-painter] animations.

## TODO

- Add languages modal `£` key;
- Add custom modal `!` key;
- Replace help `?` modal keys;
- Customize arrows and styles with *fontawesome*;
- Add modal template to `_layouts`;
- Short `_includes` file names.
- Use `head.js` library to prevent `Uncaught TypeError`;
- Use `class` with in `id` or `data-line` to load animation consecutively.

## Animation

The animation file must be named as the ``pathObj`` and placed in the ``ajax`` subdirectory.

File ``ajax/example.js``:

        var pathObj = {
            "example": {
                ...
            }
            ...
        }

File ``_post/en/example-animation.md``:

        {% include selector.html id="example" %}

In order to show the modal must be add the ``modal`` class.

        {% include selector.html id="example" class="modal" data-modal-title="Example" %}

[jekyllrb]:             http://jekyllrb.com/
[reveal.js]:            https://github.com/hakimel/reveal.js/
[lazy-line-painter]:    https://github.com/camoconnell/lazy-line-painter
