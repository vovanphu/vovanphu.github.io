import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { useEffect, useState } from 'react';

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

const getRadius = () => {
    return Math.min(500, window.innerWidth - 100, window.innerHeight - 100) / 2;
}

function SkillTagCloud() {
    const [radius, setRadius] = useState(getRadius());

    const handleResize = () => {
        setRadius(getRadius());
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            handleResize();
        });
    }, []);

	return (
		<div className='flex items-center justify-center overflow-hidden'>
			<TagCloud
				options={() => ({
					radius: radius,
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
