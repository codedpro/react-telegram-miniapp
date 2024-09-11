import { StoryWidgetLink } from './storyWidgetLink';
export interface StoryShareParams {
    /**
     * Optional. The caption to be added to the media.
     * Regular users can add up to 200 characters, while premium subscribers can add up to 2048 characters.
     */
    text?: string;
    /**
     * Optional. An object that describes a widget link to be included in the story.
     * Note that only premium subscribers can post stories with links.
     */
    widget_link?: StoryWidgetLink;
}
//# sourceMappingURL=storyShareParams.d.ts.map