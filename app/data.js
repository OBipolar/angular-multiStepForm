var db = {
    'question': 'Q1',
    'tip': 'Tip: Choose whatever you want',
    'options': [
        {
            'content': 'O1_1',
            'next': {
                'question': 'Q11',
                'tip': 'Tip: You are close to the answer',
                'options': [
                    {
                        'content': 'O11_1',
                        'next': {
                            'question': 'Q111',
                            'tip': 'Tip: One more step!',
                            'options': [
                                {
                                    'content': 'O111_1',
                                    'answer': '111_1'
                                    },
                                {
                                    'content': 'O111_2',
                                    'answer': '111_2'
                                    },
                                {
                                    'content': 'O111_3',
                                    'answer': '111_3'
                                }
                            ]
                        }
                        },
                    {
                        'content': 'O11_2',
                        'next': {
                            'question': 'Q112',
                            'tip': 'Tip: You just come to another end.',
                            'options': [
                                {
                                    'content': 'O112_1',
                                    'next': {
                                        'question': 'Q1121',
                                        'tip': 'Tip1121',
                                        'options': [
                                            {
                                                'content': 'O1121_1',
                                                'answer': '1121_1'
                                                },
                                            {
                                                'content': 'O1121_2',
                                                'answer': '1121_2'
                                                },
                                            {
                                                'content': 'O1121_3',
                                                'answer': '1121_3'
                                            }

                                        ]
                                    }
                                    },
                                {
                                    'content': 'O112_2',
                                    'answer': '112_2'
                                }
                            ]
                        }
                    }
                ]
            }
            },
        {
            'content': 'O1_2',
            'next': {
                'question': 'Q12',
                'tip': 'Tip12',
                'options': [
                    {
                        'content': 'O12_1',
                        'answer': '12_1'
                        },
                    {
                        'content': 'O12_2',
                        'answer': '12_2'
                        },
                    {
                        'content': 'O12_3',
                        'answer': '12_3'
                        },
                    {
                        'content': 'O12_4',
                        'answer': '12_4'
                    }
                ]
            }
            },
        {
            'content': 'O1_3',
            'next': {
                'question': 'Q13',
                'tip': 'Tip13',
                'options': [
                    {
                        'content': 'O13_1',
                        'next': {
                            'question': 'Q131',
                            'tip': 'Tip131',
                            'options': [
                                {
                                    'content': 'O131_1',
                                    'answer': '131_1'
                                },
                                {
                                    'content': 'O131_2',
                                    'answer': '131_2'
                                },
                                {
                                    'content': 'O131_3',
                                    'answer': '131_3'
                                }
                            ]
                        }
                        },
                    {
                        'content': 'O13_2',
                        'answer': '13_2'
                    }
                ]
            }
        }
    ]
}
