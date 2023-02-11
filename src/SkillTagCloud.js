import { TagCloud } from '@frank-mayer/react-tag-cloud';

const skills = [
    'PHP',
    'SugarCRM',
    'VtigerCRM',
    'MySQL',
    'Javascript (ES6+)',
    'HTML',
    'CSS',
    'NodeJs',
    'Express',
    'ReactJs',
    'NextJs',
    'RestAPI',
    'GraphQL',
    'VueJs',
    'TypeScript',
    'jQuery',
    'Git',
    'Bootstrap',
    'Tailwindcss',
    'MikroORM',
    'TypeORM',
    'PineScript',
    'Smarty',
];

function SkillTagCloud() {
	return (
		<div>
			<TagCloud
				options={(window) => ({
					radius: Math.min(500, window.innerWidth, window.innerHeight) / 2,
					maxSpeed: 'normal',
                    initSpeed: 'slow',
				})}
				// onClick={(tag, _ev) => alert(tag)}
				onClickOptions={{ passive: true }}
			>
				{skills}
			</TagCloud>
		</div>
	);
}

export default SkillTagCloud;
